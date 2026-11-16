import { useState } from "react";
import { projects } from "../data";
import Projectitem from "./Projectitem";
import Form from "./Form";

function Projects() {
    const [search, setSearch] = useState("");
    const [projectList, setProjectList] = useState(projects);
    const categories = ["All", "Python", "HTML", "Java", "React"];
    const [category, setCategory] = useState("All");
//  This when user searches for projetct
    const filteredProjects = projectList.filter((project) => {
        const matchesSearch =
            project.programmingLanguage.toLowerCase().includes(search.toLowerCase()) ||
            project.projectName.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            category === "All" || project.programmingLanguage === category;

        return matchesSearch && matchesCategory;
    });
// use to add new projects from the form to our exsiting list of projects u
    const addProject = (newProject) => {
        setProjectList([{ ...newProject, id: projectList.length + 1 }, ...projectList]);
    };

    return (
        <section id="Projects" className="mx-auto mt-32 max-w-5xl">
            <h2 className="text-5xl font-medium tracking-tight text-neutral-900">
                Projects
            </h2>

            <input
                type="text"
                placeholder="Search projects"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mt-8 w-full max-w-md rounded-full border border-neutral-900 bg-transparent px-5 py-3 text-sm outline-none"
            />

            <div className="mt-6 flex flex-wrap gap-2">
                {categories.map((item) => (
                    <button
                        key={item}
                        onClick={() => setCategory(item)}
                        className={`rounded-full border border-neutral-900 px-4 py-2 text-sm ${
                            category === item ? "bg-neutral-900 text-white" : "text-neutral-900"
                        }`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <Form onAddProject={addProject} />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                {filteredProjects.map((project) => (
                    <Projectitem key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;