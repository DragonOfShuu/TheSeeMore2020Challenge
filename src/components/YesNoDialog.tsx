import BaseDialog from "./BaseDialog"
import Button from "./Button"
import styles from './YesNoDialog.module.sass'

type Props = {
    question: string,
    isOpen: boolean,
    responseCallback: (response: boolean) => unknown,
}

const YesNoDialog = (props: Props)=> {
    // const yesButton = useRef<HTMLButtonElement>(null)

    const sendResponse = (positive: boolean) => {
        props.responseCallback(positive)
        // Let's expect the parent to close the dialog
        // setDialogOpen(false);
    }

    return (
        <BaseDialog open={props.isOpen} close={() => sendResponse(false)}>
            <div className={`size-full space-y-5`}>
                <h1>
                    {props.question}
                </h1>
                <div className={`flex grow w-full justify-around`}>
                    <Button notProminent onClick={()=> sendResponse(false)} className={styles.yesNoButton}>
                        No
                    </Button>
                    <Button onClick={()=> sendResponse(true)} className={styles.yesNoButton}>
                        Yes
                    </Button>
                </div>
            </div>
        </BaseDialog>
    )
}

export default YesNoDialog;