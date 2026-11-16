function ProjectItem({ project }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-[#efe7db] p-6 text-neutral-900">

      <h3 className="text-xl font-medium tracking-tight">
        {project.projectName}
      </h3>

      <span className="inline-block w-fit rounded-full bg-[#e0d4c0] px-3 py-0.5 text-xs text-[#4a3f2e]">
        {project.programmingLanguage}
      </span>

      <p className="text-sm leading-relaxed text-[#5a5347]">
        {project.description}
      </p>

    </div>
  );
}

export default ProjectItem;