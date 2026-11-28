"use server";

import { auth } from "@/lib/auth";

export interface AuthFormState {
  message: string | null;
  success?: boolean;
  errors: Record<string, string[]>;
}

export async function loginUser(
  _: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  if (formData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // console.log("email & password :::: ", email, password);
    if (!email || email === "") {
      return {
        message: null,
        errors: {
          email: ["Email is required!"],
        },
      };
    }

    if (!password || password === "") {
      return {
        message: null,
        errors: {
          password: ["Password is required!"],
        },
      };
    }

    try {
      const response = await auth.api.signInEmail({
        body: {
          email,
          password,
          rememberMe: true,
        },
      });
      //For debugging purpose
      console.log("Login response: ", response);

      return {
        message: "User login successfully",
        success: true,
        errors: {},
      };
    } catch (error) {
      if (error instanceof Error) {
        return {
          message: "User login failed",
          success: false,
          errors: {
            general: ["An error occurred during login. Please try again."],
          },
        };
      }
    }
  }

  return {
    message: "",
    success: true,
    errors: {},
  };
}

export async function registerUser(
  _: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  if (formData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (!name || name === "") {
      return {
        message: null,
        errors: {
          name: ["Name is required"],
        },
      };
    }

    if (!email || email === "") {
      return {
        message: null,
        errors: {
          email: ["Email is required"],
        },
      };
    }

    if (!password || password === "") {
      return {
        message: null,
        errors: {
          password: ["Password is required"],
        },
      };
    }

    if (password !== confirmPassword) {
      return {
        message: null,
        success: false,
        errors: {
          confirmPassword: ["Passwords do not match"],
        },
      };
    }

    try {
      const response = await auth.api.signUpEmail({
        body: {
          name,
          email,
          password,
        },
      });

      console.log("response: ", response);

      return {
        message: "User registration successful",
        success: true,
        errors: {},
      };
    } catch (error) {
      console.log("Registration error", error);

      return {
        message: "User registration failed",
        success: false,
        errors: {
          general: ["An error occurred during registration."],
        },
      };
    }
  }

  return {
    message: "",
    success: true,
    errors: {},
  };

  try {
    //
  } catch {
    //
  }
}
