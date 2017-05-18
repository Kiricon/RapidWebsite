package main

import rapid "github.com/Kiricon/Rapid"

func main() {
	app := rapid.App()

	app.Get("/", func(c rapid.Connection) {
		c.View("index.html")
	})

	app.Get("/quickstart", func(c rapid.Connection) {
		c.View("quickstart.html")
	})

	app.StaticFolder("/", "public")
	app.ViewFolder("views")

	app.Listen(8080)
}
