class React {
        constructor(){
            this.library = "React"
            this.server = "https://localhost:300"

            // requirement
            document
                .querySelector('button')
                .addEventListener('click', this.handleClick.bind(this))
            // this.handleClick()  ...isme  chalega normally hi but async mein bind karna padega.....

        }
        handleClick(){
            console.log("button clicked");
            console.log(this.server);
        }
    }

    const app = new React()