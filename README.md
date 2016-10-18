## WordPlay

A stateless single page application for leveraging the technique of combining words to generate new ideas.

## Development
Create a bucket

```
$ ./manage.sh create keighty.wordplay.com
```

Create a new wordList

```
$ node --use-strict bin/word-generator.js
```

### Production
[keighty.wordplay.com](http://keighty.wordplay.com.s3-website-us-east-1.amazonaws.com)

### Deployment
```
$ ./manage.sh deploy keighty.wordplay.com
```

HeroImage.jpg is licensed from popularwoodworking.com under the Creative Commons Attribution License (CC BY 3.0 US).

AWS script credit: [Serverless Single Page Applications](https://pragprog.com/book/brapps/serverless-single-page-apps) by Ben Rady
