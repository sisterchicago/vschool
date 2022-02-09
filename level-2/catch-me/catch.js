//1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

function sum(x, y) {
    if (arg(x) || arg(y)) {
        throw Error('Arguments must be numbers')
    }
    return x + y;
  }

  try {
      sum(1, 2)
  }
  catch(err) {
      console.log(err)
  }

//2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

const user = {username: "sam", password: "123abc"};

function login(username, password) {
    if (username != user.username || password != user.password) {
        throw Error('Username or password incorrect. Please try again')
    } else {
        console.log('login successful!')
    }
}

try {
    login("sam", "123abc")
}
catch(err) {
    console.log(err)
}