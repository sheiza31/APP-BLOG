import FormLogin from "./components/FormRegister";
import RegisterLayout from "./layouts/layout";
export default function RegisterPage() {
    return (
       <>
       <RegisterLayout>
        <FormLogin />
      </RegisterLayout>
       </>
    );
}