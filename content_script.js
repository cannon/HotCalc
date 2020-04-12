// https://github.com/cannon/HotCalc

setInterval(function () {
	var inputs = document.getElementsByTagName("input");
	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i];

		if (input.type == "text") {
			if (input.SwappedOriginal || input.SwappedReplacement) {
				continue;
			}
			// All for TurboTax: Find elements with auto-validation, and clone them and make the original invisible. Their scripts still point to the original.
			if (input.getAttribute("data-format") || input.getAttribute("data-validate")) {
				var replacement = input.cloneNode(true);
				replacement.removeAttribute("id");
				replacement.removeAttribute("name");
				replacement.removeAttribute("data-format");
				replacement.removeAttribute("data-validate");
				replacement.SwappedOriginal = input;
				input.SwappedReplacement = replacement;
				//input.style.display = "none";
				input.style.position = "absolute";
				input.style.opacity = "0.0";
				input.style.zIndex = "-10000";
				if (input.nextSibling) {
					input.parentNode.insertBefore(replacement, input.nextSibling);
				} else {
					input.parentNode.appendChild(replacement);
				}
			}
		}
	}

	inputs = document.getElementsByTagName("input");
	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i];

		if (input.type == "text") {
			if (input.SwappedReplacement) {
				// If you tab to the invisible original, switch to the replacement
				if (document.activeElement == input) {
					input.SwappedReplacement.focus();
				}
				continue;
			}
			if (input.SwappedOriginal) {
				// If the invisible original moved/was deleted, delete the replacement
				if (input.SwappedOriginal.parentNode != input.parentNode) {
					var orig = input.SwappedOriginal;
					delete orig.SwappedReplacement;
					input.remove();
					continue;
				}
			}

			// The invisible original nodes won't get here
			if (document.activeElement == input) {
				input.wasActive = true;
			} else {
				if (input.wasActive) {
					if (input.value.startsWith("=")) {
						// This is the actual meat of it
						input.value = eval(input.value.substr(1));
					}

					// If this is a replacement, simulate tabbing to the original, pasting the value in, and tabbing back to whatever you were on
					if (input.SwappedOriginal) {
						var shouldFocus = document.activeElement;

						input.SwappedOriginal.focus();
						input.SwappedOriginal.value = input.value;
						input.SwappedOriginal.dispatchEvent(new ClipboardEvent('paste'));
						if (shouldFocus) {
							shouldFocus.focus();
						} else {
							input.SwappedOriginal.blur();
						}

						// Also set the replacement node to whatever the autocorrect decided so it looks good
						input.value = input.SwappedOriginal.value;
					}
				}

				input.wasActive = false;
			}
		}
	}
}, 100);


