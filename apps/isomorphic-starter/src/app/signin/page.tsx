import AuthWrapper from "./auth-wrapper";
import SignInForm from "./sign-in-form";
import { metaObject } from "@/config/site.config";

export const metadata = {
  ...metaObject("Sign In 4")
};

export default function SignInPage() {
  return (
    <AuthWrapper
      title={
        <>
          Welcome! <br /> Login to continue..
        </>
      }
      isSignIn
      isSocialLoginActive={true}
    >
      <SignInForm />
    </AuthWrapper>
  );
}
