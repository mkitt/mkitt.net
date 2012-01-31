
HEAD = app/templates/head.html
TAIL = app/templates/tail.html
SASS = app/stylesheets/application.sass

application.css: $(SASS)
	@rm -f stylesheets/$@
	@sass $< > stylesheets/$@

index.html:
	@rm -f $@
	@cat $(HEAD) app/templates/$@ $(TAIL) > $@.new
	@sed 's/class="main"/class="home"/' $@.new > $@
	@rm -f $@.new

elements.html:
	@cat app/templates/elements.md | marked > app/templates/$@
	@cat $(HEAD) app/templates/$@ $(TAIL) > $@
	@rm -f app/templates/$@

resume:
	@cat resume/resume.md | marked > resume/resume.html
	@cat $(HEAD) resume/resume.html $(TAIL) > resume/index.html
	@rm -f resume/resume.html

clean:
	@rm -f elements.html

publish: clean application.css index.html resume

.PHONY: index.html application.css resume elements.html clean publish

