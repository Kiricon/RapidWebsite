package main

import rapid "github.com/Kiricon/Rapid"

func main() {
	app := rapid.App()

	app.Get("/", func(c rapid.Connection) {
		c.View("views/index.html")
	})

	app.StaticFolder("/", "public")

	app.Listen(3000)
}
