

const Container = ({children, className}) => {
  return (
    <div className={`max-w-[1280px] px-3 lg:px-0 mx-auto ${className}`}>{children}</div>
  )
}

export default Container