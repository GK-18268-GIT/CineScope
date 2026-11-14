"use server";

export interface AuthFormState {
  message: string | null;
  success?: boolean;
  error: Record<string, string[]>;
}

export async function loginUser(
  _: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  if (formData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    console.log("email & password :::: ", email, password);

    return {
      message: "",
      success: true,
      error: {},
    };
  }

  return {
    message: "",
    success: true,
    error: {},
  };

  try {
    //
  } catch {
    //
  }
}

export async function registerUser(): Promise<AuthFormState> {
  return {
    message: "",
    success: true,
    error: {},
  };

  try {
    //
  } catch {
    //
  }
}
