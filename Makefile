
STYL = app/stylesheets/dark.styl \
			 app/stylesheets/white.styl \
			 app/stylesheets/solardark.styl \
			 app/stylesheets/solarlight.styl

CSS = $(STYL:.styl=.css)


all: site css

site:
	@pagen pagen.json

css: $(CSS)

%.css: %.styl
	@stylus --compress < $< > stylesheets/$(shell basename $@)
	@echo stylesheets/$(shell basename $@) built

view:
	open http://local.github-mkitt/

publish: all
	@rm elements.html


.PHONY: all site css view publish

