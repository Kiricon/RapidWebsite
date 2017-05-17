package main

import rapid "github.com/Kiricon/Rapid"

func main() {
	app := rapid.App()

	app.Get("/", func(c rapid.Connection) {
		c.View("views/index.html")
	})

	app.Get("/quickstart", func(c rapid.Connection) {
		c.View("views/quickstart.html")
	})

	app.StaticFolder("/", "public")

	app.Listen(8080)
}
