import "./ReviewForm.css"

function Review_Form() {
    return (
        <div className="review-container">
            <h2>Give Your Review</h2>
            <form>
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required></input>
                </div>
                <div className="form-group">
                    <label for="review">Review:</label>
                    <textarea id="review" name="review" rows="5" required></textarea>
                </div>
                <div className="form-group">
                    <label>Rating:</label>
                    <div className="row rating-stars flex justify-center space-x-1" s>
                        <p>       &#9733; &#9733; &#9733; &#9733; &#9733;
                        </p>
                    </div>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default Review_Form;