
HEAD = app/templates/head.html
TAIL = app/templates/tail.html
SASS = app/stylesheets/application.sass

application.css: $(SASS)
	@rm -f stylesheets/$@
	@sass $< > stylesheets/$@

index.html:
	@rm $@
	@cat $(HEAD) app/templates/$@ $(TAIL) > $@

resume:
	@cat resume/resume.md | marked > resume/resume.html
	@cat $(HEAD) resume/resume.html $(TAIL) > resume/index.html
	@rm resume/resume.html

clean:
	@rm -f stylesheets/application.css
	@rm index.html

.PHONY: index.html application.css resume clean

