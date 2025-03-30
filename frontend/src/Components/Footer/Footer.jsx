import { Socials } from "../imports-components"

export default function Footer() {
  return (
    <footer id="Footer" className="py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <p className="text-center mb-4">Made with ❤ by Pradeep Gaur</p>
        </div>
        <Socials
          className="justify-center"
          imagesStylesObj={{ width: "40px" }}
          imagesDivClassesProp="shadow-none bg-white/10 hover:bg-white/20"
        />
      </div>
    </footer>
  )
}

