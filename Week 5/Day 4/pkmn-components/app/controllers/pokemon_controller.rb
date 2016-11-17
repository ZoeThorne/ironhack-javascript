class PokemonController < ApplicationController
  def index
    response = PokemonApi.request("pokedex/1")
    @pokemon = response["pokemon"].sort_by do |pokemon|
    								pokemon["name"]
    							end
    render(:index)
  end
end
