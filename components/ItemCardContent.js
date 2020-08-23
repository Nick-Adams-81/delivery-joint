import axios from 'axios'




class ItemCardContent extends React.Component {
    state = { posts: [] };

    async componentDidMount() {
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=1")
        this.setState({ posts: res.data })
        console.log(res)
        
    }

    render() {
        return (
            <div className="main">
                {this.state.posts.length > 0 ? (
                <div>{this.state.posts.map((post) =>
                    <ul className="list-group">
                        <li className="list-group-item">
                            {post.title}
                        </li>
                        <li className="list-group-item">
                            {post.body}
                        </li>
                    </ul>
                    )}</div>
                ) : (
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                )}
            </div>
        )
    }

}
 

export default ItemCardContent;