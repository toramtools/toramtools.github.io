<!DOCTYPE html>
<html>
    <head>
        <title>Stat & Skill Points Simulator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" href="css/LS.css" />
    </head>

    <body>
        <div class="header">
            <div class="header-title">Toram Online - Stat &amp; Skill Points Simulator</div>
        </div>
        
        <span class="section-title">Level</span>
        <div class="section">
            <form>
                <div class="sp-block">
                    <div>
                        <label for="level">Lv</label>
                        <input class="level-input" id="level" type="number" min="1"/>
                    </div>
                    <div>
                        <label for="lvcap">MaxLv</label>
                        <input class="level-input" id="lvcap" type="number" min="1" value="215"/>
                    </div>
                </div>
            </form>
        </div>

        <span class="section-title">Stat and Skill Points</span>
        <div class="section">
            <form>
                <div class="sp-block">
                    <div>
                        <label for="stat-points">Stat Points</label>
                        <input class="level-input" id="stat-points" type="number" min="1"/>
                    </div>
                    <div>
                        <label for="skill-points">Skill Points</label>
                        <input class="level-input" id="skill-points" type="number" min="1"/>
                    </div>
                </div>
            </form>
        </div>

        <span class="section-title">Emblems (Soon)</span>
        <div class="section">
        </div>

        <div id="footer">Developed by: Insane23</div>
    </body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="js/LS.js"></script>
</html>
