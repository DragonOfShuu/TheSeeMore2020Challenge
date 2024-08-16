import { ReactNode, useEffect, useRef } from "react"
import styles from './BaseDialog.module.sass'

type Props = {
    children: ReactNode,
    open: boolean,
    close: ()=>unknown,
}

const useOpenDialog = (dialog: React.RefObject<HTMLDialogElement>, open: boolean) => {
    useEffect(()=> {
        console.log("OpenDialog ran")
        if (open) {
            dialog.current?.showModal?.();
        } else {
            dialog.current?.close();
        }
    }, [dialog, open])

    return null;
}

const BaseDialog = (props: Props) => {
    const internalDialog = useRef<HTMLDialogElement>(null);

    useOpenDialog(internalDialog, props.open)

    return (
        <dialog ref={internalDialog} className={styles.baseDialog}>
            <div className={`flex flex-col gap-4`}>
                <div className={`flex justify-end h-2`}>
                    <button onClick={() => props.close()}>
                        X
                    </button>
                </div>
                <div className="grow">
                    {props.children} 
                </div>
            </div>
        </dialog>
    )
}

export default BaseDialog;
