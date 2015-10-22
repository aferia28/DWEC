$(document).ready(function()
{
    $('#divInfo').html('Loading...');
    $.ajax(
        {
            type: "GET",
            url: 'http://www.bbc.co.uk/tv/programmes/genres/drama/scifiandfantasy/schedules/upcoming.json',
            dataType: 'json',
            complete: function(jqXHR, textStatus)
            {
                $('#divInfo').html('Load complete');
                console.log("Load complete");
            },
            error: function(jqXHR, textStatus, errorThrown)
            {
                // status = código de error
                $('#divInfo').text('Error: ' + jqXHR.status + ' - ' + errorThrown);
            },
            success: function(jsonBBC)
            {
                console.log(jsonBBC);
                $.each(jsonBBC.broadcasts, function(i, item)
                {
                    $('#series>ol').append('<li type="button">' + item.programme.display_titles.title + ', ' + item.programme.display_titles.subtitle + '</li>');
                });
                $('li').click(function()
                {
                    $('#infoSeries').empty();
                    $('#divInfo').html('Loading...');
                    $.ajax(
                        {
                            url: 'http://www.bbc.co.uk/tv/programmes/genres/drama/scifiandfantasy/schedules/upcoming.json',
                            dataType: 'json',
                            complete: function(jqXHR, textStatus)
                            {
                                $('#divInfo').html('Load complete');
                            },
                            error: function(jqXHR, textStatus, errorThrown)
                            {
                                $('#divInfo').text('Error: ' + jqXHR.status + ' - ' + errorThrown);
                            },
                            success: function(jsonBBC)
                            {
                                $.each(jsonBBC.broadcasts, function(i, item)
                                {
                                    $('#infoSeries').append('<li>' + item.programme.short_synopsis + '</li>');
                                });
                            }
                        });
                });
            }
        });
});
