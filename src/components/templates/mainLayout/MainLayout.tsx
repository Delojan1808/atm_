import "./MainLayout.css"

type MainLayoutProps={
    children:React.ReactNode;

}
const MainLayout:React.FC<MainLayoutProps>=({children})=>{
    return(
        <>
        <div className="mainLayout"></div>
        <div className="mainLayer">
            <main className="main">{children}</main>
        </div>
        </>

    )
}

export default MainLayout;