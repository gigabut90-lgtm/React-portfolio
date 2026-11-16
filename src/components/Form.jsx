import { useState } from "react";

function Form({ onAddProject }) {
    const [name, setName] = useState("");
    const [language, setLanguage] = useState("");
    const [description, setDescription] = useState("");
// event handler 
    const handleSubmit = (e) => {
        e.preventDefault();
// calling the function form the parent project
        onAddProject({
            projectName: name,
            programmingLanguage: language,
            description: description,
        });
// reseting the value of the states after submiting 
        setName("");
        setLanguage("");
        setDescription("");
    };

    return (

        <form onSubmit={handleSubmit} className="mt-10 grid gap-3 rounded-2xl  bg-[#efe7db]  p-6 md:grid">
            <div>
                <label for="visitors" class="block mb-2.5 text-sm font-bold text-heading">Project Name</label>
                <input type="text" id="visitors" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs"
                    placeholder="name of project"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                 required/>

            </div>
            <div>
                <label for="visitors" class="block mb-2.5 text-sm font-bold text-heading">Language</label>
                <input type="text" id="visitors" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
                    placeholder="Language eg:Javascript"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)} 
                    required/>
            </div>
            <div>
                <label for="visitors" class="block mb-2.5 text-sm  text-heading font-bold">Description..</label>
                <input type="text" id="visitors" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
                    placeholder="Describe what project does"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                    required/>
            </div>
              <button type="submit" class="text-white bg-black box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>


        </form>


    );
}

export default Form;