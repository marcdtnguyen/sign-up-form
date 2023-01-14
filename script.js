const pwds = Array.from(document.querySelectorAll('input[type=password]'));
pwds.forEach(p => p.addEventListener('input', validate));

function validate(e){
    if(pwds[0].value === pwds[1].value && pwds[0].value != ''){
        showMatch(e.target);
    } else {
        showError(e.target);
    }
    // console.log(pwds[0].value , pwds[1].value)
    // console.log(e.target)
}

function showMatch(e){
    pwds.forEach(e=> e.classList.remove('error'));
}

function showError(e){
    pwds.forEach(e=> e.classList.add('error'));
}