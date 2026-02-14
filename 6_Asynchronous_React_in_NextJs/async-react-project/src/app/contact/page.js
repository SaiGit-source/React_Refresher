export default function Page(){
    async function handleSubmit(formData){
        "use server";
        const formFields = {
            email: formData.get("email"),
            message: formData.get("message")
        }
        console.log("formFields", formFields);
        console.log("TODO: send these form field values to a backend service");
        return formFields;
    }

    return (
        <main className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <div>
            <h1 className="text-2xl font-bold text-center mb-6">Contact us!</h1>
            <form className="space-y-4"  action={handleSubmit}>
                <div>
                    <label htmlFor="email" 
                    className="block text-sm font-medium text-gray-700">Email</label>
                    <input 
                    id="email" 
                    name="email"
                    type="email" 
                    required
                    className="border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                    />
                </div>
                <div>
                    <label htmlFor="message"
                    className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea 
                    id="message" 
                    required name="message" 
                    rows="4"
                    className="border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    ></textarea>
                </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
                Send Message
            </button>
            </form>
            </div>
        </main>
    )
}