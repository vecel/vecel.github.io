import emailjs from "@emailjs/browser"
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react"

export default function EmailForm({ displayPopup }: { displayPopup: (message: string) => void}) {

    const emptyEmail = {
        email: "",
        subject: "",
        message: ""
    }

    const [email, setEmail] = useState(emptyEmail)
    const [pending, setPending] = useState(false)
    

    useEffect(() => {
        emailjs.init({
          publicKey: "gUeo-01zqVLeJpuqg"
        })
      }, [])
    
    const sendEmail = (e: FormEvent) => {
        e.preventDefault()
        setPending(true)      
        emailjs.sendForm("personal_website", "personal_website_contact", "#email-form")
            .then(() => {
                setEmail(emptyEmail)
                displayPopup("Email was sent successfully.")  
            }, () => {
                // TODO: implement error
            })
        setPending(false)
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail({...email, email: e.target.value})
    }

    const handleSubjectChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail({...email, subject: e.target.value})
    }

    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setEmail({...email, message: e.target.value})
    }

    return (
        <form id="email-form" onSubmit={sendEmail} className="relative flex flex-col items-stretch flex-4 text-sm">
            <input id="email" name="email" type="email" onChange={handleEmailChange} value={email.email} placeholder="Email..." required className="mb-4 p-2 border focus:shadow-[4px_4px] focus:shadow-secondary" />
            <input type="text" name="subject" onChange={handleSubjectChange} value={email.subject} placeholder="Subject..." required className="mb-4 p-2 border focus:shadow-[4px_4px] focus:shadow-secondary" />
            <textarea name="message" onChange={handleMessageChange} value={email.message} placeholder="Message..." required className="flex-1 mb-4 p-2 border focus:shadow-[4px_4px] focus:shadow-secondary" />
            <input type="submit" value="Send" className="p-2 pl-6 pr-6 self-center border bg-secondary-container text-primary cursor-pointer hover:shadow-[4px_4px] hover:shadow-secondary focus:shadow-[4px_4px] focus:shadow-secondary" />
            { pending && <div className="absolute bottom-0 right-0 m-2 size-4 border-2 border-primary border-b-transparent rounded-3xl animate-spin"/> }     
        </form>
    )
}