const Layout = ({children}) => {
    return (
        <div className='flex flex-col items-center mt-20'>
            <div>
            {children}
            </div>
        </div>
    )
}
export default Layout