import supabase, { supabaseUrl } from "./supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}

export async function getCurrentUser() {
  // #1. Get Data from Local Storage
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  // #1. Get User Data from an API
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  // console.log(data);

  return data?.user;
}

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // #1. Update `password` OR `fullName`
  let updateData;

  if (password) {
    updateData = {
      password,
    };
  }

  if (fullName) {
    updateData = {
      data: {
        fullName,
      },
    };
  }

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  if (!avatar) return data;

  // #2. Upload the `avatar` Image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) {
    console.error(storageError);
    throw new Error(storageError.message);
  }

  // #3. Update avatar in the User
  const { data: updatedUser, error: updatedUserError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    });

  if (updatedUserError) {
    console.error(updatedUserError);
    throw new Error(updatedUserError.message);
  }

  return updatedUser;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
}
