import { useState } from "react";

const useForm = (initialValue) => {
    const [form, setForm] = useState(initialValue);

    return [
        form,
        (formType, formValue) => {
            if (formType === 'RESET') {
                return setForm(initialValue);
            }
            return setForm({ ...form, [formType]: formValue });
        }
    ]
}

export default useForm;