class BugsController < ApplicationController
  # before_action :set_bug, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  # GET /bugs
  # GET /bugs.json
  def index
    p params
    @bugs = Bug.all.where(params[:id])

    respond_to do |format|
    format.json {
      render :json => @bugs
    }
  end
end
  # GET /bugs/1
  # GET /bugs/1.json
  def show
    @bugs = Bug.find(params[:id])
    # render :json => @bugs
  end

  # GET /bugs/new
  def new
    @bug = Bug.new
  end

  # GET /bugs/1/edit
  def edit
  end

  # POST /bugs
  # POST /bugs.json
  def create
    p "/////////////////////////////////////"
    @bug = Bug.new(:bug_title => params[:bugsname], :issue_log => params[:comments], :project_id => params[:project_id],
      :due_date => params[:dueDate], :priority => params[:priority], :status => params[:status], :severity => params[:severity])


    respond_to do |format|
      if @bug.save
        p 'successsssssssss'
        format.html { redirect_to @bug }
        format.json { render json: "ok" }
      else
        p 'failllllllll'
        # format.html { render :new }
        # format.json { render json: @bug.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /bugs/1
  # PATCH/PUT /bugs/1.json
  def update
    respond_to do |format|
      if @bug.update(bug_params)
        format.html { redirect_to @bug, notice: 'Bug was successfully updated.' }
        format.json { render :show, status: :ok, location: @bug }
      else
        format.html { render :edit }
        format.json { render json: @bug.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bugs/1
  # DELETE /bugs/1.json
  def destroy
    @bug.destroy
    respond_to do |format|
      format.html { redirect_to bugs_url, notice: 'Bug was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bug
      @bug = Bug.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    # def bug_params
    #   params.fetch(:bug, {})
    # end
end