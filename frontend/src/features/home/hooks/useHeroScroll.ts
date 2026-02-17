export function useHeroScroll() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return {
    scrollToProjects: () => scrollToSection("projects"),
    scrollToContact: () => scrollToSection("contact"),
  }
}
