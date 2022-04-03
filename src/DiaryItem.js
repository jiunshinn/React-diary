const DiaryItem = ({ author, content, created_at, emotion, id }) => {
    return <div className="DiaryItem">
        <div className="info">
            <span>
                작성자 : {author} | 감정점수 : {emotion}
            </span>
            <br />
            <span className="data">{new Date(created_at).toLocaleDateString()}</span>
        </div>
        <div className="content">{content}</div>
    </div>
}

export default DiaryItem;