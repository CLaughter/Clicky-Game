import React, { Component } from "react";

import Header from "./components/Header";
import Result from "./components/Result";
import Image from "./components/Image";
import imagesData from "./Images.json";

class App extends Component {
    state = {
        images: imagesData,
        score: 0,
        totalScore: 0,
        correct: null
    };

    clicked = clickedId => {
        this.shuffleImages(this.state.images);
        const clickedImage = this.state.images.find(
            image => image.id === clickedId
        );

        if (clickedImage.isClicked) {
            this.setState({ correct: false });
            return this.resetGame(false);
        } else if (this.state.score > 10) {
          this.setState({ totalScore: this.state.score + 1})
          this.resetGame(true)
        } else {
            this.setState(prevState => {
                const updatedImages = prevState.images.map(image => {
                    if (image.id === clickedId) {
                        image.isClicked = true;
                    }
                    return image;
                });

                let newScore = prevState.score + 1;
                let newTotalScore = prevState.totalScore;
                if (newScore > prevState.totalScore) {
                    newTotalScore = newScore;
                }

                return {
                    images: updatedImages,
                    score: newScore,
                    totalScore: newTotalScore,
                    correct: "true"
                };
            });
        }
    };

    shuffleImages = array => {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        this.setState({
            images: array
        });
    };

    resetGame = (Won) => {
        this.setState(prevState => {
            const updatedImages = prevState.images.map(image => {
                if (image.isClicked) {
                    image.isClicked = false;
                }
                return image;
            });
            return {
                images: updatedImages,
                score: 0,
                correct: (Won ? "win" : false)
            };
        });
    };

    render() {
        return (
            <div>
                <Header
                    score={this.state.score}
                    totalScore={this.state.totalScore}
                />
                <Result key={this.state.score} correct={this.state.correct} />
                <div className="container">
                    <div className="images">
                        {this.state.images.map(image => (
                            <Image
                                key={image.id}
                                clicked={this.clicked}
                                image={image}
                            />
                        ))}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default App;