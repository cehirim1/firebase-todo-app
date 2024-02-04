import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "../../config/firebase-config";

export const userAuthAPI = createApi({
  reducerPath: "userAuthAPI",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["User"],
  endpoints: (build) => ({
    emailSignup: build.mutation<
      UserCredential,
      {
        email: string;
        password: string;
      }
    >({
      queryFn: async ({ email, password }) => {
        try {
          const response = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
          );
          return {
            data: response,
          };
        } catch (err) {
          return {
            error: (err as Error).message,
          };
        }
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useEmailSignupMutation } = userAuthAPI;
