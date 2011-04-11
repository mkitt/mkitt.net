
STYL = app/stylesheets/white.styl
CSS = $(STYL:.styl=.css)


all: html css

html:
	@ghpagen

css: $(CSS)

view:
	open http://local.github-mkitt/

%.css: %.styl
	@stylus --compress < $< > stylesheets/$(shell basename $@)
	@echo stylesheets/$(shell basename $@) built

.PHONY: all html css view

