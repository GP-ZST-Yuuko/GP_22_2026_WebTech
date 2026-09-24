    function StudentCard(props){
      return(
        <>
            <article className="student-card">
                <h2>{props.student.firstName} {props.student.lastName}</h2>
            </article>
        </>
      )
    }

export default StudentCard;