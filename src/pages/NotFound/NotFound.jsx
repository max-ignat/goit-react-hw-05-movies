import not_found_page from '../../defaultImg/not_found_page.jpg'

 const NotFound = () => {
     return (
       <>
         <p> This page not ready yet! Sorry !</p>
         <img src={not_found_page} alt="404" width={1200} />
       </>
     );
}

export default NotFound;