import { Link } from "react-router-dom"

export default function Socials({ imagesStylesObj, imagesDivClassesProp = "py-2", className = "", ...props }) {
  const imagesStyles = imagesStylesObj || { width: "30px" }
  const imagesDivClasses = `rounded-md p-2 bg-slate-50 hover:bg-gray-200 duration-200 hover:shadow-xl ${imagesDivClassesProp}`
  return (
    <div className={`socials flex flex-wrap gap-1 ${className}`} {...props}>
      <Link to="https://www.linkedin.com/in/pradeep-gaur-0384331a1/">
        <div className={imagesDivClasses}>
          <img className="" style={imagesStyles} src="images/linkedin.png" />
        </div>
      </Link>
      <Link to="https://github.com/pradeep652227">
        <div className={imagesDivClasses}>
          <img style={imagesStyles} src="images/github.png" />
        </div>
      </Link>
      <Link to="https://twitter.com/pradeep_gaur1">
        <div className={imagesDivClasses}>
          <img style={imagesStyles} src="images/twitter.png" />
        </div>
      </Link>
    </div>
  )
}

