export default function PopupBanner({ message, display }: { message: string, display: boolean }) {
    
    return (
        <div className={`${ display ? "" : "hidden"} fixed bottom-10 left-1/2 -translate-x-1/2 p-3 text-sm rounded-2xl bg-on-surface-light z-20`}>
            { message }
        </div>
    )
}