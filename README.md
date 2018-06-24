# Shitf | "When you just need things to turn to 💩💩💩"
By [November](https://github.com/November)

## Description
For all your shit-posting needs. The poster child for a
mission-critical, highly-regarded, and definitely
not useless library.

Have you ever written out a long text message, but felt that
there wasn't enough oomf, or pizazz, or hubabuba? Well, no more,
with the revolutionary unveiling of `Shitf`.

`Shitf` will convert any given string into a poop emoji (💩)
filled diatribe that will convert your boring old sentence
into a nonsensical glorious piece of shit.

`Shitf` comes as both a library that can be directly
imported and used in `Python 3`, and as a RESTful web
API that can be easily deployed for maximum developer
shit-posting velocity. These respective revolutionary,
disruptive, and innovative forms can be simplified to
`SaaS` (Shitf as a Service) and `SaaF` (Shitf as a
Function).

## u 4 real
Yup.

## y u do dis
Some say that it's to make fun of the JavaScript
ecosystem. Others, at the prevalence of terrible
`X-as-a-Service` providers flooding through recently.
For the rest, as a statement about the wonders of modern
web development.

In the end, it's really down to trying to provide a
library that can contribute greatly to society, providing
real value-add to the furthering of humanity's goals as a
species.

Also, I was bored on the toilet. Inspiration [here](https://www.reddit.com/r/mildlyinteresting/comments/5wk5zh/this_shitf_key/deb22pb/).

## Usage
### Direct Function Usage
```python
from shitf import shitf

sad_string = "SAD, non-shitfified string"

print(shitf(sad_string))

# Outputs: '💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩'
```

### API Request Call
**NOTE**: When sending body data, there is no need to `URI-encode`
the given string. The only time this is required is whenever
query strings are used.

The following code examples use `python 3` and
the [requests](http://docs.python-requests.org/en/master/) library.

- With body data:
```python
import requests

r = requests.post('http://localhost:3000/api/shitf/', data = {'messages':'some SAD, non-shitfified string'})

print(r.json())

# Outputs: {'messages': ['💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩']}
```

- With query strings:
```python
import requests

r = requests.get('http://localhost:3000/api/shitf?messages=some+SAD%2C+non-shitfified+string')

print(r.json())

# Outputs: {'messages': ['💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩']}
```

- With both body data & query strings:
```python
import requests

r = requests.post('http://localhost:3000/api/shitf?messages=some+SAD%2C+non-shitfified+string', data = {'messages':'some other SAD, non-shitfified string'})

print(r.json())

# Outputs: {'messages': ['💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩', '💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩']}
```

## Dependencies
- A sense of humour

## Installation
For now:
- git clone the repo
- See usage

Later:
- pip install shitf

## Yer a F**king Genius, How Do I Invest In This?
Due to the high demand, we are currently not accepting
any more offers of investment from outside investors.

This may and will definitely change as we sell out to
The Man™.

## License
This software is provided as-is for your entertainment.
Usage of this library in a non-joke setting is retarded,
and usage, crashing, or complaints about usage in production
will be laughed at, screen-shot, and then sent to your work
place to be hung up as posters of shame.

If you end up using this code, you agree to the following terms:
- To agree that pirates will forever be cooler than ninjas
- To send a daily tweet at Dan Harmon regarding the release
date for Rick and Morty season 3
- To forever hold deep in your heart the teachings of great
modern philosopher [Nicki Minaj](https://en.wikipedia.org/wiki/Nicki_Minaj),
who was the only one to know the true workings of an Anaconda's mind.
- To realize the futility of life, death, the cosmos, humanity, and
the fact that we as a specifies will be alone in this dark and empty
universe, slowly drifting through time and space as a mote of light,
dancing on a sunbeam before flickering out silently into the darkness.
- To agree that the New York Yankees suck.
