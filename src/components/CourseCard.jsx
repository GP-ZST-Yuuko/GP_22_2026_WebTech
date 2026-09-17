function CourseCard(){

    let course = {
        name: "Siatkówka",
        teacher: "Jan Naleśnik",
        hours: 45,
        completed: false
    }

    let status = "";

    if(course.completed == false){
        status = "Nie ukończono";
    }
    else{
        status = "Ukończono";
    }

    return(
        <>
            <section>
                <h2>Nazwa: {course.name}</h2>
                <p>Prowadzący: {course.teacher}</p>
                <p>Liczba godzin: {course.hours}</p>
                <p>Status: {status}</p>
            </section>
        </>
    )
}

export default CourseCard;