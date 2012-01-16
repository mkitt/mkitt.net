
SHEET = app/stylesheets/application.sass
CSS = $(SHEET:.sass=.css)

styles: $(CSS)

%.css: %.sass
	@bundle exec sass $< > stylesheets/$(shell basename $@)

clean:
	rm -f stylesheets/$(shell basename $(CSS))

.PHONY: styles clean

