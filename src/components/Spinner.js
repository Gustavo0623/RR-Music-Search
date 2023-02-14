import load_spinner from '../images/1_9EBHIOzhE1XfMYoKz1JcsQ.gif'

const Spinner = () => {
    console.log('rendering Spinner')
    return (
        <div>
            <img src={load_spinner} alt="loading..." />
        </div>
    )
}

export default Spinner