1. Install npm packages => npm install.
2. Run command sls offline
3. Go to postman
4. Paste url http://localhost:3000/dev/text-into-types
5. Choose Post http method
6. Choose raw -> JSON
7. Paste text into body (inputText could not be empty)
    {
        "inputText": "Cat and dog are happy"
    }
8. Click button "Send"