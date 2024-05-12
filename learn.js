//content dictionary
//<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_HERE" frameborder="0" allowfullscreen></iframe>

//source data
const content = {
    // class 11---------
    class11: {
        physics: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [['w3school', 'https://www.w3schools.com/'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                top: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                more: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],

            },
            pdf: {
                recommended: ['pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf'],
                top: ['pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf'],
                more: ['pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf']
            }
        },
        chemistry: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                top: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                more: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],

            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
        mathematics: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [{ name: 'link' }, { name: 'link' }, { name: 'link' },],
                top: [{ name: 'link' }, { name: 'link' }, { name: 'link' },],
                more: [{ name: 'link' }, { name: 'link' }, { name: 'link' },]
            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
        biology: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [{ name: 'link' }, { name: 'link' }, { name: 'link' },],
                top: [{ name: 'link' }, { name: 'link' }, { name: 'link' },],
                more: [{ name: 'link' }, { name: 'link' }, { name: 'link' },]
            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
        hindi: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [{ name: 'link' }, { name: 'link' }, { name: 'link' },],
                top: [{ name: 'link' }, { name: 'link' }, { name: 'link' },],
                more: [{ name: 'link' }, { name: 'link' }, { name: 'link' },]
            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
        english: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [{ name: 'link' }, { name: 'link' }, { name: 'link' },],
                top: [{ name: 'link' }, { name: 'link' }, { name: 'link' },],
                more: [{ name: 'link' }, { name: 'link' }, { name: 'link' },]
            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
    },
    class12: {
        physics: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [{ name: 'link' }, { name: 'link' }, { name: 'link' },],
                top: [{ name: 'link' }, { name: 'link' }, { name: 'link' },],
                more: [{ name: 'link' }, { name: 'link' }, { name: 'link' },]
            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
        chemistry: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [{ name: 'link' }, { name: 'link' }, { name: 'link' },],
                top: [{ name: 'link' }, { name: 'link' }, { name: 'link' },],
                more: [{ name: 'link' }, { name: 'link' }, { name: 'link' },]
            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
        mathematics: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [{ name: 'link' }, { name: 'link' }, { name: 'link' },],
                top: [{ name: 'link' }, { name: 'link' }, { name: 'link' },],
                more: [{ name: 'link' }, { name: 'link' }, { name: 'link' },]
            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
        biology: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [{ name: 'link' }, { name: 'link' }, { name: 'link' },],
                top: [{ name: 'link' }, { name: 'link' }, { name: 'link' },],
                more: [{ name: 'link' }, { name: 'link' }, { name: 'link' },]
            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
        hindi: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [{ name: 'link' }, { name: 'link' }, { name: 'link' },],
                top: [{ name: 'link' }, { name: 'link' }, { name: 'link' },],
                more: [{ name: 'link' }, { name: 'link' }, { name: 'link' },]
            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
        english: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [{ name: 'link' }, { name: 'link' }, { name: 'link' },],
                top: [{ name: 'link' }, { name: 'link' }, { name: 'link' },],
                more: [{ name: 'link' }, { name: 'link' }, { name: 'link' },]
            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
    },
    // codding---------
    coding: {
        html: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                top: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                more: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],

            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
        css: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                top: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                more: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],

            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
        js: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                top: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                more: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],

            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
        php: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                top: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                more: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],

            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
        python: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                top: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                more: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],

            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
        rust: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                top: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                more: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],

            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
        c: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                top: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                more: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],

            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
        cpp: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                top: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                more: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],

            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
        cs: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                top: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                more: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],

            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
        sql: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                top: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                more: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],

            },
            pdf: {
                recommended: [],
                top: [],
                more: []
            }
        },
    },
    cyberSecurity: {
        phishing: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [['w3school', 'https://www.w3schools.com/'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                top: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                more: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],

            },
            pdf: {
                recommended: ['pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf'],
                top: ['pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf'],
                more: ['pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf']
            }
        },
        cloning: {
            yt: {
                recommended: ['yt1', 'yt2', 'yt3', 'yt4', 'yt5'],
                top: ['top1', 'top2', 'top3', 'top4'],
                more: ['more1', 'more2', 'more3']
            },
            web: {
                recommended: [['w3school', 'https://www.w3schools.com/'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                top: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],
                more: [['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd'], ['tech', 'https://sjdij.dss.sd']],

            },
            pdf: {
                recommended: ['pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf'],
                top: ['pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf'],
                more: ['pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf', 'pdf1.pdf']
            }
        },
       
    }
}
showTopics()



// change source

let globalSource
let globalSection
let globalTopic
let content_collect = content['class11']['physics']['pdf']['recommended']

if (localStorage.getItem("globalSource")) {
    globalSource = localStorage.getItem("globalSource")

    let source = document.getElementById(globalSource)
    source.classList.add('selected-resource')
}
if (localStorage.getItem("globalSection")) {
    globalSection = localStorage.getItem("globalSection")
    if(globalSection)
    {
        let target = document.getElementById(globalSection)
        target.classList.remove('hide-btn')
    }
}
if (localStorage.getItem("globalTopic")) {
    globalTopic = localStorage.getItem("globalTopic")

    show(globalTopic)
}

function changeSrc(i) {
    let allTargets = document.querySelectorAll('.learn-sources')
    globalSource = i
    localStorage.setItem('globalSource', i)

    let id = globalSource
    let applyFor = document.getElementById(id)
    allTargets.forEach(function (target) {
        target.classList.remove('selected-resource')
    })
    applyFor.classList.add('selected-resource')
    addContent()
}

//show

function show(id) {
    globalTopic = id
    localStorage.setItem('globalTopic', id)
    let target = document.getElementById('contentDisplay')
    let innerContent = ` <div class="content-area-box">
            <div class="content-area-head">
                <h3>recommended</h3>
            <div id="recommended" class="content-display">select source </div>
            </div>

            <div class="content-area-head">
                <h3>top</h3>
                <div id="top" class="content-display">select source </div>
            </div>

            <div class="content-area-head">
                <h3>more</h3>
                <div id="more" class="content-display">select source </div>
            </div>
            
        </div>`
    target.innerHTML = innerContent
    addContent()
    let underline = document.querySelectorAll('.section-topic')
    underline.forEach(function (cont) {
        let target = cont.querySelector('h3')
        let ic = target.innerText
        target.classList.remove('underline')
        ic = ic.toLowerCase()
        if (ic == globalTopic) {
            target.classList.add('underline')
        }
    })
}
//add content
function showTopics() {
    let displayArea = document.getElementById('displayTopics')
    for (let [sectionName, value] of Object.entries(content)) {
        let div = document.createElement('div')
        div.classList.add('learn-section')
        let contentNameDiv = document.createElement('div')
        contentNameDiv.classList.add('learn-section-heading')
        contentNameDiv.id = `${sectionName}Head`
        contentNameDiv.addEventListener('click', () => {
            show_element(sectionName, `${sectionName}Head`)
        })
        let contInner = ` <h3>${sectionName}</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" class="section-drop-icon" viewBox="0 0 16 16">
                                    <path
                                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg>`
        contentNameDiv.innerHTML = contInner
        div.append(contentNameDiv)
        let div2 = document.createElement('div')
        div2.classList.add('learn-section-topic')
        div2.classList.add('hide-btn')
        div2.id = sectionName
        div.append(div2)
        displayArea.append(div)

        for (let [topic, more] of Object.entries(value)) {
            let appendArea = document.getElementById(sectionName)
            let oneMoreDiv = document.createElement('div')
            oneMoreDiv.classList.add('section-topic')
            oneMoreDiv.addEventListener('click', () => {
                show(`${topic}`)
            })
            let innerTopic = `<h3>${topic}</h3>`
            oneMoreDiv.innerHTML = innerTopic
            appendArea.append(oneMoreDiv)

        }
    }
    // console.log(displayArea)

}
function addContent() {
    let content_collect = content[globalSection][globalTopic][globalSource]

    let rec = document.getElementById('recommended')
    let top = document.getElementById('top')
    let more = document.getElementById('more')

    let recContent = content_collect['recommended']
    let topContent = content_collect['top']
    let moreContent = content_collect['more']

    rec.innerHTML = ''
    top.innerHTML = ''
    more.innerHTML = ''

    if (globalSource == 'yt') {

        for (item in recContent) {
            let cont = document.createElement('iframe')
            cont.src = `https://www.youtube.com/embed/${recContent[item]}`
            rec.appendChild(cont)
        }
        for (item in topContent) {
            let cont = document.createElement('iframe')
            cont.src = `https://www.youtube.com/embed/${topContent[item]}`
            top.appendChild(cont)
        }
        for (item in moreContent) {
            let cont = document.createElement('iframe')
            cont.src = `https://www.youtube.com/embed/${moreContent[item]}`
            more.append(cont)
        }
    }
    else if (globalSource == 'pdf') {
        for (item in recContent) {
            let innerContent = `<object data="./pdf/${recContent[item]}" type="application/pdf"></object>
            <button onclick="pdfFull('rec${item}')">full screen</button>
            <button onclick="pdfFull('rec${item}')" class="hide-btn">close</button>
            `
            let cont = document.createElement('div')
            cont.classList.add('pdf-container')
            cont.innerHTML = innerContent
            cont.id = `rec${item}`
            rec.appendChild(cont)
        }
        for (item in topContent) {
            let innerContent = `<object data="./pdf/${topContent[item]}" type="application/pdf"></object>
            <button onclick="pdfFull('top${item}')">full screen</button>
            <button onclick="pdfFull('top${item}')" class="hide-btn">close</button>
            `
            let cont = document.createElement('div')
            cont.classList.add('pdf-container')
            cont.innerHTML = innerContent
            cont.id = `top${item}`

            top.appendChild(cont)
        }
        for (item in moreContent) {
            let innerContent = `<object data="./pdf/${moreContent[item]}" type="application/pdf"></object>
            <button onclick="pdfFull('more${item}')">full screen</button>
            <button onclick="pdfFull('more${item}')" class="hide-btn">close</button>
            `
            let cont = document.createElement('div')
            cont.classList.add('pdf-container')
            cont.innerHTML = innerContent
            cont.id = `more${item}`
            more.appendChild(cont)
        }
    }
    else if (globalSource == 'web') {

        for (item in recContent) {
            let innerContent = `<h4 class="display-web-head">${recContent[item][0]}</h4><a href="${recContent[item][1]}" target="_blank">open</a>`

            let cont = document.createElement('div')
            cont.classList.add('web-container')
            cont.innerHTML = innerContent
            cont.id = `rec${item}`
            rec.appendChild(cont)
        }
        for (item in topContent) {
            let innerContent = `<h4 class="display-web-head">${recContent[item][0]}</h4><a href="${topContent[item][1]}" target="_blank">open</a>`

            let cont = document.createElement('div')
            cont.classList.add('web-container')
            cont.innerHTML = innerContent
            cont.id = `top${item}`
            top.appendChild(cont)
        }
        for (item in moreContent) {
            let innerContent = `<h4 class="display-web-head">${recContent[item][0]}</h4><a href="${moreContent[item][1]}" target="_blank">open</a>`

            let cont = document.createElement('div')
            cont.classList.add('web-container')
            cont.innerHTML = innerContent
            cont.id = `more${item}`
            more.append(cont)
        }
    }
}

//pdf full screen

function pdfFull(id) {
    let target = document.getElementById(id)
    target.classList.toggle('pdf-full-scr')
    let btn = target.getElementsByTagName('button')
    try {
        for (b in btn) {
            btn[b].classList.toggle('hide-btn')
            // console.clear()
        }
    } catch (error) {
        
    }
}

//show learn topics
function show_element(target, targetHead) {
    let content = document.getElementById(target)
    globalSection = target
    localStorage.setItem('globalSection', target)

    let btnID = document.getElementById(targetHead)
    let Buttons = btnID.querySelectorAll('.section-drop-icon')
    let learn = document.querySelectorAll('.learn-section-topic')
    learn.forEach(function (l) {
        if (l.id == target) {
            return
        }
        else {
            l.classList.add('hide-btn')
        }
    })
    content.classList.toggle('hide-btn')
}


let myTarget = document.querySelectorAll('.section-topic')
myTarget.forEach(tr => {
    tr.addEventListener('click', () => {
        let forClose = document.querySelectorAll('.learn-section-topic')
        forClose.forEach(el => {
            el.classList.toggle('responsive-hide')
        })
    })
})




// <div class="learn-section" >
//                         <div class="learn-section-heading" onclick="show_element('class11','class11Head')"
//                             id="class11Head">
//                             <h3>class 11<sup>th</sup></h3>
//                             <svg xmlns="http://www.w3.org/2000/svg" class="section-drop-icon" viewBox="0 0 16 16">
//                                 <path
//                                     d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
//                             </svg>
//                         </div>
//                         <div class="learn-section-topic hide-btn" id="class11">
//                             <div class="section-topic" onclick="show('physics')">
//                                 <h3>physics</h3>
//                             </div>
//                             <div class="section-topic" onclick="show('chemistry')">
//                                 <h3>chemistry</h3>
//                             </div>
//                             <div class="section-topic" onclick="show('mathematics')">
//                                 <h3>mathematics</h3>
//                             </div>
//                             <div class="section-topic" onclick="show('biology')">
//                                 <h3>biology</h3>
//                             </div>
//                             <div class="section-topic" onclick="show('hindi')">
//                                 <h3>hindi</h3>
//                             </div>
//                             <div class="section-topic" onclick="show('english')">
//                                 <h3>english</h3>
//                             </div>
//                         </div>
//                     </div>


