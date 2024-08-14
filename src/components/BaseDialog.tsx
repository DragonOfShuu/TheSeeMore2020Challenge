import { ReactNode, useEffect, useRef } from "react"
import styles from './BaseDialog.module.sass'

type Props = {
    children: ReactNode,
    open: boolean,
    close: ()=>unknown,
}

const BaseDialog = (props: Props) => {
    const internalDialog = useRef<HTMLDialogElement>(null);

    useEffect(()=> {
        if (props.open) {
            internalDialog.current?.showModal?.();
        } else if (!props.open) {
            internalDialog.current?.close();
        }
    }, [props.open])

    return (
        <dialog ref={internalDialog} className={styles.baseDialog}>
            <div className={`flex flex-col gap-4`}>
                <div className={`flex justify-end h-2`}>
                    <button onClick={() => internalDialog.current?.close()}>
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
