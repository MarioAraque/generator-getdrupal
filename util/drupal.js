var drupal6Repo = 'https://github.com/drupal/drupal.git -b 6.x',
    drupal7Repo = 'https://github.com/drupal/drupal.git -b 7.x',
    drupal8Repo = 'https://github.com/drupal/drupal.git -b 8.x';

function getDrupal(drupalVersion) {
  console.log('Instaling Drupal '+drupalVersion+'. Please wait...');
  require('simple-git')().clone('https://github.com/drupal/drupal.git -b '+drupalVersion+'.x', 'drupal', function(error){
    if(error)
      console.log('There was a problem in the instalation. Please try again.');
    else
      console.log('Installed Drupal succesfully, enjoy it!');
  });
}

module.exports = {
  getDrupal: getDrupal
};
