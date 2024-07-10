const profile = document.querySelector('.profiles')

let pandas = {
    one: "https://images.unsplash.com/photo-1625859043880-56acbcb6a6ac?q=80&w=2357&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    two: "https://images.unsplash.com/photo-1599625042924-a22b68c0e39a?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    three: "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}
console.log(profile)

for (let panda in pandas) {
    profile.innerHTML += `<img src=${pandas[panda]} alt="panda" />`
    console.log(profile)
}
