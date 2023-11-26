'use client'

import { passwordStrength } from "check-password-strength";
import { EyeSlashIcon } from "@heroicons/react/20/solid";
import { EyeIcon } from "@heroicons/react/24/outline";
import { Input, button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import ShowPassStrength from "./ShowPassStrength";

type TStrength = 0 | 1 | 2 | 3;

const PasswordInput = () => {
    const [visible, setVisible] = useState(false);
    const [strength, setStrength] = useState<TStrength>(0);
    const [pass, setPass] = useState("");

    useEffect(() => {
        const passwordChecked = (passwordStrength(pass).id as TStrength);
        setStrength(passwordChecked)
    }, [pass]);

    return (
        <div className="flex flex-col gap-y-2">
            <Input
                onValueChange={(value) => setPass(value)}
                label='Password' type={visible ? 'text' : 'password'} endContent={
                    <button onClick={() => setVisible(!visible)}>
                        {visible ?
                            <EyeSlashIcon className="w-4" />
                            :
                            <EyeIcon className="w-4" />}
                    </button>
                } />
            <ShowPassStrength strength={strength} />
        </div>
    );
}

export default PasswordInput;